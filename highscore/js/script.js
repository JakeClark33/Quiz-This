const dataStore = window.localStorage;
const dsKey = "high_scores";
const hsListEl = document.getElementById('highScoreList');

const getHighscores = () => {
    return JSON.parse(dataStore.getItem(dsKey));
}

const renderHighscores = (highscores) => {
    highscores
    .sort((a, b) => b.score - a.score)
    .forEach(score => {
        const listItem = document.createElement('p');
        listItem.textContent = `${score.initials}: ${score.score}`;
        hsListEl.append(listItem);
    });
}

const highscores = getHighscores();
renderHighscores(highscores);
