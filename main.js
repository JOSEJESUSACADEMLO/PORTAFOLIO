/*La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra y retornarlo usando return

Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con deberás retornar la palabra Erik
*/

/*
function findLastWord(str)
{
    let array = str.split(' ');
    return console.log(array[3]);
}

findLastWord("Hola, me llamo Erik");
*/
function test(words) {

  
return console.log(words.split(" ").splice(-1));
  
    }

test("hola me llamo jesus");