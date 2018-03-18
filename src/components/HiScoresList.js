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
    return sortedUsers.slice(0, 10); //returns sorted array
  };
  return (
    <div className="hiscores-panel">
      <p>High Scores</p>
      <ol>
        {hiScores().map((
          user //map and return user scores
        ) => (
          <li key={user.id}>
            {user.name}: {user.hiScore}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HiScoresList;
