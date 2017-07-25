# JQuery-Student-Management-System

1. On page load fire an ajax request load json file and list on the student details in tabular
format.

        a. Show only 10 record at a time
        b. Provide a dropdown with option to select 20, 50, 100 records to display
        
2. Once the ajax response is received it needs to saved in local storage as well.

3. Sample json should contain details of multiple students (array of JSON objects)
        a. [
        {
        }
        ]

        b. Note : create multiple objects in json array, minimum of 100 objects. Create a
        simple json array using javascript loop and convert to json string using json
        stringify

4. List should intially show only firstname, lastname, email, location, phone, current_class,
address and options to show "moredetails" ,"edit","delete" once a change is made it
should update the localStorage as well.

5. Above the list container create a form to add new students with all the details mentioned
in the sample JSON.
        a. once a new students is added it should update the localstorage as well.
        b. Add form should provide option to add multiple locations. Use drag and drop to
        add multiple locations.

6. Provide a search form, so that the user can search students based on firstname,
lastname, location, current_class and phone.

7. Once you finish all the above steps. Try to incorporate window.scroll event
        a. Once the window is scrolled right till the end you should fetch more objects from
        local storage and append it with the existing result
        b. Once all the data is displayed show “No more records” message and kill the stop
        the scroll event.
