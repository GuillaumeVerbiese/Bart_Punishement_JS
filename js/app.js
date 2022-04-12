const app = {
    init: function() {
        // Semection des champs
        const textInput = document.querySelector('#text');
        const numberInput = document.querySelector('#number_lines');
        
        // mise à jour à chaque keyup
        textInput.addEventListener('keyup', app.updateBoard);
        numberInput.addEventListener('keyup', app.updateBoard);
        // Gestion des flèches pour changer le nombre de lignes
        numberInput.addEventListener('change', app.updateBoard);
    },
    updateBoard: function() {
        let board = document.querySelector('.text-board');

        // Vide les précédentes entrées
        board.innerHTML = '';

        const text =  document.querySelector('#text').value;
        const linesNumber =  document.querySelector('#number_lines').value;

        for (let index = 1; index <= linesNumber; index++) {
           board.innerHTML += text + '<br/>';
        }
        
    }
}

document.addEventListener('DOMContentLoaded', app.init);