export default function Result (props){

  const calification = (props.average < 50) ? 'Very bad':
                        (props.average < 75) ? 'Good' :
                        (props.average < 80) ? 'Very good':
                        'Excelent';
  const avPeople = (props.average > 51 && props.average < 65 ) ? '50%':
                    (props.average > 65 && props.average < 80 ) ? '65%':
                    (props.average > 80 &&props.average < 90) ? '80%':
                    (props.average > 90 && props.average < 100) ? '90%':
                    'you are the best'
    return (<div>
      <div className="result">
        <h3>Your result</h3>
        <div className="points">
          <p className="score">{props.average} <span>of 100</span></p>
          
        </div>

        <h2>{calification}</h2>
        <p>You scored higher than {avPeople} of the people who have taken these tests.</p>
      </div>
    </div>)
}