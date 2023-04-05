// console.log('bugs');


// function parseIntWithError(selectedString){
//     const result = parseInt(selectedString);
//     if (isNaN(result)) {
//         throw new Error('sei un cretino, non hai messo un numero!!!');
//     } else {
//         return result;
//     }
// }



// try {
//     const numero = parseIntWithError('caffè')
//     console.log(numero);
// } catch (error) {
//     console.log('caro utente, forse è colpa mia, ma qualcosa non è andato a buon fine. Potresti reinserire il numero? Grazie mille e scusa ancora.');
// }


// function indexOfWithError(array, element){
//     if (array.length === 0) {
//         throw new EmptyArrayError('che cazzo combini? mi hai passato un array vuoto!')
//     } else {
//         const index = array.indexOf(element);
//         if (index === -1) {
//             throw new ElementNotFoundError('non ho trovato un belin di niente!!!')
//         } else {
//             return index;
//         }
//     }
// }

// try {
//     const index = indexOfWithError(['qui', 'quo', 'qua'], 'paperone')
//     console.log(index);
// } catch (error) {
//     if(error instanceof EmptyArrayError){
//         console.log('caro utente per qualche strano errore mi è arrivato un array vuoto')
//     } else if (error instanceof ElementNotFoundError){
//         console.log('ho cercato in lungo e in largo ma purtroppo non ho trovato niente')
//     } else {
//         console.log('qualcosa si è rotto ma non so cosa')
//     }
// }


// function isElementInArray(array, element) {
//     try {
//         indexOfWithError(array, element);
//         return true;
//     } catch (error) {
//         if (error instanceof ElementNotFoundError) {
//             return false;
//         } else {
//             throw error;
//         }
//     } finally {
//         console.log('qualcosa si è rotto');
//     }
// }


// try {
//     const isInside = isElementInArray([], 'qui');
//     console.log(isInside);
// } catch (error) {
//     console.log(error.message);
// }