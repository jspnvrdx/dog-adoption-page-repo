var dog1_name = "Sushi", dog2_name = "Dosan", dog3_name = "Moonchin";
        var age1 = 1, age2 = 2, age3 = 2;
        const dog1_favtoys = ["bone", "water", "ball"];
        const dog2_favtoys = ["ball", "shoelace", "strings"];
        const dog3_favtoys = ["Ducklings", "Grass"];

        function dogYearsConverter(dog_age){
           return dog_age * 7;
        }

        var dog1_age = dogYearsConverter(age1);
        var dog2_age = dogYearsConverter(age2);
        var dog3_age = dogYearsConverter(age3);

        
        document.getElementById("dog1-name").innerHTML = "Name: " + dog1_name;
        document.getElementById("dog1-age").innerHTML = "Age: Your doggie is " + dog1_age + " in dog years!";
        document.getElementById("fave-toys1").innerHTML = "fave toys: " + dog1_favtoys[0] + "," + dog1_favtoys[1] + "," + dog1_favtoys[2];

        document.getElementById("dog2-name").innerHTML = "Name: " + dog2_name;
        document.getElementById("dog2-age").innerHTML = "Age: Your doggie is " + dog2_age + " in dog years!";
        document.getElementById("fave-toys2").innerHTML = "fave toys: " + dog2_favtoys[0] + "," + dog2_favtoys[1] + "," + dog2_favtoys[2];

        document.getElementById("dog3-name").innerHTML = "Name: " + dog3_name;
        document.getElementById("dog3-age").innerHTML = "Age: Your doggie is " + dog3_age + " in dog years!";
        document.getElementById("fave-toys3").innerHTML = "fave toys: " + dog3_favtoys[0] + "," + dog3_favtoys[1];