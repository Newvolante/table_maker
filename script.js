$(document).ready(function () {
    let workers = [{
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Jim',
            rate: 85
        },
        {
            name: 'Nigel',
            rate: 120
        }
    ]

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