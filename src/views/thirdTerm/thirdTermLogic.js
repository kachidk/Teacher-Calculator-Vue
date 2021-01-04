export function getTotal(){
    var classList = document.querySelectorAll(".mathsCA, .mathsExam, .grammarCA, .grammarExam, .compositionCA, .compositionExam, .comprehensionCA, .comprehensionExam, .spellingCA, .spellingExam, .socialCA, .socialExam, .scienceCA, .scienceExam, .healthCA, .healthExam, .geographyCA, .geographyExam, .religiousCA, .religiousExam, .moralCA, .moralExam, .verbalCA, .verbalExam, .vocationalCA, .vocationalExam, .quantitativeCA, .quantitativeExam, .nigeriaCA, .nigeriaExam, .frenchCA, .frenchExam, .computerCA, .computerExam, .historyCA, .historyExam, .poetryCA, .poetryExam, .citizenshipCA, .citizenshipExam, .mathsFirstTerm, .grammarFirstTerm, .compositionFirstTerm, .comprehensionFirstTerm, .spellingFirstTerm, .socialFirstTerm, .scienceFirstTerm, .healthFirstTerm, .geographyFirstTerm, .religiousFirstTerm, .moralFirstTerm, .verbalFirstTerm, .vocationalFirstTerm, .quantitativeFirstTerm, .nigeriaFirstTerm, .frenchFirstTerm, .computerFirstTerm, .historyFirstTerm, .poetryFirstTerm, .citizenshipFirstTerm, .mathsSecondTerm, .grammarSecondTerm, .compositionSecondTerm, .comprehensionSecondTerm, .spellingSecondTerm, .socialSecondTerm, .scienceSecondTerm, .healthSecondTerm, .geographySecondTerm, .religiousSecondTerm, .moralSecondTerm, .verbalSecondTerm, .vocationalSecondTerm, .quantitativeSecondTerm, .nigeriaSecondTerm, .frenchSecondTerm, .computerSecondTerm, .historySecondTerm, .poetrySecondTerm, .citizenshipSecondTerm  ");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        var divide = sum / 30;
        this.totalTotal = sum;
        this.totalDivide = divide;
}

export function getTotalCA(){
  var classList = document.querySelectorAll(".mathsCA, .grammarCA, .compositionCA, .comprehensionCA, .spellingCA, .socialCA, .scienceCA, .healthCA, .geographyCA, .religiousCA, .moralCA, .verbalCA, .vocationalCA, .quantitativeCA, .nigeriaCA, .frenchCA, .computerCA, .historyCA, .poetryCA, .citizenshipCA ");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalCA = sum;
}

export function getTotalExam(){
  var classList = document.querySelectorAll(".mathsExam, .grammarExam, .compositionExam, .comprehensionExam, .spellingExam, .socialExam, .scienceExam, .healthExam, .geographyExam, .religiousExam, .moralExam, .verbalExam, .vocationalExam, .quantitativeExam, .nigeriaExam, .frenchExam, .computerExam, .historyExam, .poetryExam, .citizenshipExam ");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalExam = sum;
}

export function getTotalFirstTerm(){
  var classList = document.querySelectorAll(".mathsFirstTerm, .grammarFirstTerm, .compositionFirstTerm, .comprehensionFirstTerm, .spellingFirstTerm, .socialFirstTerm, .scienceFirstTerm, .healthFirstTerm, .geographyFirstTerm, .religiousFirstTerm, .moralFirstTerm, .verbalFirstTerm, .vocationalFirstTerm, .quantitativeFirstTerm, .nigeriaFirstTerm, .frenchFirstTerm, .computerFirstTerm, .historyFirstTerm, .poetryFirstTerm, .citizenshipFirstTerm ");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalFirstTerm = sum;
}

export function getTotalSecondTerm(){
    var classList = document.querySelectorAll(".mathsSecondTerm, .grammarSecondTerm, .compositionSecondTerm, .comprehensionSecondTerm, .spellingSecondTerm, .socialSecondTerm, .scienceSecondTerm, .healthSecondTerm, .geographySecondTerm, .religiousSecondTerm, .moralSecondTerm, .verbalSecondTerm, .vocationalSecondTerm, .quantitativeSecondTerm, .nigeriaSecondTerm, .frenchSecondTerm, .computerSecondTerm, .historySecondTerm, .poetrySecondTerm, .citizenshipSecondTerm  ");
          const main = Array.prototype.map.call(classList, function(element){
            return element.value;  
          });
          let bbc = n => isNaN(n) ? 0 : n;
  
          var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
          this.totalSecondTerm = sum;
}

export function getMathsTotal(){
    var classList = document.querySelectorAll(".mathsCA, .mathsExam, .mathsFirstTerm, .mathsSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalMaths = sum;   
}

export function getGrammarTotal(){
    var classList = document.querySelectorAll(".grammarCA, .grammarExam, .grammarFirstTerm, .grammarSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalGrammar = sum;
}

export function getCompositionTotal(){
    var classList = document.querySelectorAll(".compositionCA, .compositionExam, .compositionFirstTerm, .compositionSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalComposition = sum;
}

export function getComprehensionTotal(){
    var classList = document.querySelectorAll(".comprehensionCA, .comprehensionExam, .comprehensionFirstTerm, .comprehensionSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalComprehension = sum;
}

export function getSpellingTotal(){
    var classList = document.querySelectorAll(".spellingCA, .spellingExam, .spellingFirstTerm, .spellingSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalSpelling = sum;
}

export function getSocialTotal(){
    var classList = document.querySelectorAll(".socialCA, .socialExam, .socialFirstTerm, .socialSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalSocial = sum;
}

export function getScienceTotal(){
    var classList = document.querySelectorAll(".scienceCA, .scienceExam, .scienceFirstTerm, .scienceSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalScience = sum;
}

export function getHealthTotal(){
    var classList = document.querySelectorAll(".healthCA, .healthExam, .healthFirstTerm, .healthSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalHealth = sum;
}

export function getGeographyTotal(){
    var classList = document.querySelectorAll(".geographyCA, .geographyExam, .geographyFirstTerm, .geographySecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalGeography = sum;
}

export function getReligiousTotal(){
    var classList = document.querySelectorAll(".religiousCA, .religiousExam, .religiousFirstTerm, .religiousSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalReligious = sum;
}

export function getMoralTotal(){
    var classList = document.querySelectorAll(".moralCA, .moralExam, .moralFirstTerm, .moralSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalMoral = sum;
}

export function getVerbalTotal(){
    var classList = document.querySelectorAll(".verbalCA, .verbalExam, .verbalFirstTerm, .verbalSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalVerbal = sum;
}

export function getVocationalTotal(){
    var classList = document.querySelectorAll(".vocationalCA, .vocationalExam, .vocationalFirstTerm, .vocationalSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalVocational = sum;
}

export function getQuantitativeTotal(){
    var classList = document.querySelectorAll(".quantitativeCA, .quantitativeExam, .quantitativeFirstTerm, .quantitativeSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalQuantitative = sum;
}

export function getNigeriaTotal(){
    var classList = document.querySelectorAll(".nigeriaCA, .nigeriaExam, .nigeriaFirstTerm, .nigeriaSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalNigeria = sum;
}

export function getFrenchTotal(){
    var classList = document.querySelectorAll(".frenchCA, .frenchExam, .frenchFirstTerm, .frenchSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalFrench = sum;
}

export function getComputerTotal(){
    var classList = document.querySelectorAll(".computerCA, .computerExam, .computerFirstTerm, .computerSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalComputer = sum;
}

export function getHistoryTotal(){
    var classList = document.querySelectorAll(".historyCA, .historyExam, .historyFirstTerm, .historySecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalHistory = sum;
}

export function getPoetryTotal(){
    var classList = document.querySelectorAll(".poetryCA, .poetryExam, .poetryFirstTerm, .poetrySecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalPoetry = sum;
}

export function getCitizenshipTotal(){
    var classList = document.querySelectorAll(".citizenshipCA, .citizenshipExam, .citizenshipFirstTerm, .citizenshipSecondTerm");
        const main = Array.prototype.map.call(classList, function(element){
          return element.value;  
        });
        let bbc = n => isNaN(n) ? 0 : n;

        var sum = main.reduce(function(a, b) { return bbc(parseInt(a)) + bbc(parseInt(b));}, 0);
        this.totalCitizenship = sum;
}



