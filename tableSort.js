import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

    const sortColumn = (event) => {
        const indis = Number(event.target.id); // Select clicked columnn
        var table, i, x, y;
        table = document.getElementById('tbody');
        var switching = true;
        // Run loop until no switching is needed
        while (switching) {
            switching = false;
            var rows = table.rows;
            // Loop to go through all rows
            for (i = 1; i < rows.length - 1; i++) {
                var Switch = false;
                // Fetch 2 elements that need to be compared
                x = rows[i].getElementsByTagName('TD')[indis + 2];
                y = rows[i + 1].getElementsByTagName('TD')[indis + 2];
                // Get inner cell Number
                let numX = Number(x.innerText.split('%')[0]);
                let numY = Number(y.innerText.split('%')[0]);
                // Check if 2 rows need to be switched
                if (numX > numY) {
                    // If yes, mark Switch as needed and break loop
                    Switch = true;
                    break;
                }
            }
            if (Switch) {
                // Function to switch rows and mark switch as completed
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    };

 // Sum each table column
    useEffect(() => {
        const table = document.getElementById('tbody');
        const rows = table.rows;
        for (let j = 0; j < data.length; j++) {
            let sumVal1 = 0;
            for (let i = 0; i < rows.length - 1; i++) {
                let x = rows[i + 1].getElementsByTagName('TD')[j + 2];
                sumVal1 += Number(x.innerText.split('%')[0]);
            }
            rows[0].cells[j + 2].innerText = checked === false ? sumVal1.toFixed(2) + '%' : sumVal1;
        }
    }, [checked, data]);
