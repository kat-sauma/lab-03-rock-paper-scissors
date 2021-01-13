# HTML set up
1. Radio Buttons /
    - input type radio: 3 of them
    - images for rock, paper, scissors
    - each button needs "names", "values"
2. Toss Button /
    - button
3.Wins/Loss/Total /
    - empty divs for each
    - empty div for current throw result

1) Grab DOM elements by ID
2) Initialize some state
    - wins: 0
    - total: 0
3) Add event listeners to the button
    - ON CLICK
        1) store automated computer throw
            - random: heads/tails
            - math.random() : if/then 1 heads 0 tails 
        2) store user's throw
            - grab the checked input, get value
        3) compare user's guess to computer throw
        4) display result of the throw
        