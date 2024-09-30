let score = JSON.parse(localStorage.getItem('score'));

            if(score === null)
            {
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }

            changeScore();

            function playGame(playerMove)
            {
                const computerMove = pickComputerMove();

                let result = '';

                if(playerMove === 'scissors')
                {
                    if(computerMove === 'rock')
                    {
                        result = 'You lose.';
                    }
                    else if(computerMove === 'paper')
                    {
                        result = 'You win.';
                    }
                    else
                    {
                        result = 'Tie.';
                    }
                }
                else if(playerMove === 'rock')
                {
                    if(computerMove === 'rock')
                    {
                        result = 'Tie.';
                    }
                    else if(computerMove === 'paper')
                    {
                        result = 'You lose.';
                    }
                    else
                    {
                        result = 'You win.';
                    }
                }
                else
                {
                    if(computerMove === 'rock')
                    {
                        result = 'You win.';
                    }
                    else if(computerMove === 'paper')
                    {
                        result = 'Tie.';
                    }
                    else
                    {
                        result = 'You lose.';
                    }
                }

                if(result === 'You win.')
                {
                    score.wins++;
                }
                else if(result === 'You lose.')
                {
                    score.losses++;
                }
                else
                {
                    score.ties++;
                }

                localStorage.setItem('score', JSON.stringify(score));
                changeScore();
                displayResult(result);
                displayMoves(playerMove, computerMove);
            }

            function pickComputerMove()
            {
                const randomNumber = Math.random();

                if(randomNumber >= 0 && randomNumber < 1/3)
                {
                    computerMove = 'rock';
                }
                else if(randomNumber >= 1/3 && randomNumber < 2/3)
                {
                    computerMove = 'paper';
                }
                else
                {
                    computerMove = 'scissors';
                }

                return computerMove;
            }

            function resetScore()
            {
                score.wins = 0;
                score.losses = 0;
                score.ties = 0;

                localStorage.removeItem('score');
                changeScore();
            }

            function changeScore()
            {
                document.querySelector('.js-score').innerHTML = 
                'Wins: ' + score.wins + ', Losses: ' + score.losses + ', Ties: ' + score.ties;
            }

            function displayResult(result)
            {
                document.querySelector('.js-result').innerHTML =
                    result;
            }

            function displayMoves(playerMove, computerMove)
            {
                document.querySelector('.js-moves').innerHTML = 
                    `You <img src="images/${playerMove}-emoji.png">
                    <img src=images/${computerMove}-emoji.png> Computer`;
            }