
var Jstrans = {

  language: 'en-GB',
  translations: [],

  getTranslations: function(language, component){

    return $.ajax({

      async: false,
      url: 'mokuji/components/' + component + '/i18n/' + language + '.json'

    })

    .done(function(data){

      if( Jstrans.translations[language] == null ){
        Jstrans.translations[language] = [];
      }

      Jstrans.translations[language][component] = data;

    });

  },

  setLanguage: function(languageCode){

    if(languageCode == null) alert('jtrans error: languageCode was empty.');

    Jstrans.language = languageCode;

  },

  translate: function(component, phrase){

    var phraseTranslated;

    // Load translation file if necessery.
    if(Jstrans.translations[Jstrans.language] == null || Jstrans.translations[Jstrans.language][component] == null){
      Jstrans.getTranslations(Jstrans.language, component);
    }

    // Get translation.
    if(Jstrans.translations[Jstrans.language][component][phrase] == null){
      phraseTranslated = phrase;
    }
    else{
      phraseTranslated = Jstrans.translations[Jstrans.language][component][phrase];
    }

    // Return translation.
    return phraseTranslated;

  }

}

function __(component, phrase){
  return Jstrans.translate(component, phrase)
}
