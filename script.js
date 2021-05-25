$(document).ready(function () {

    // function to filter workers
    function filteringByRate(item) {
        return item.rate > 65 && item.rate < 90;
    }

    // array containing workers
    let bestWorkers = workers.filter(filteringByRate);

    // iterating through workers to fill out the table
    bestWorkers.forEach((item) => {
        console.log(item);
        let $newTableRow = $('<tr></tr>');
        let $cell1 = $('<td>' + item.name + '</td>');
        let $cell2 = $('<td>' + item.rate + '</td>');

        $('tbody').append($newTableRow);
        $newTableRow.append($cell1);
        $newTableRow.append($cell2);
    });
});