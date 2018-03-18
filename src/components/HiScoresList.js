import React from 'react';

const HiScoresList = props => {
  //console.log(props.users); //returns an array
  const hiScores = () => {
    const sortedUsers = props.users.sort((a, b) => {
      //sort array
      if (b.hiScore < a.hiScore) {
        return -1;
      } else if (a.hiScore < b.hiScore) {
        return 1;
      } else {
        return 0;
      }
    });
    const cleanSortedUsers = sortedUsers.filter(user => {
      return user.name !== 'anonymous';
    });
    return cleanSortedUsers.slice(0, 5); //returns sorted array
  };
  return (
    <div className="hiscores-panel">
      <p>High Scores</p>
      <ol>
        {hiScores().map((
          user //map and return user scores
        ) => (
          <li key={user.id} className="hiscore-text">
            {user.name}: {user.hiScore}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HiScoresList;
