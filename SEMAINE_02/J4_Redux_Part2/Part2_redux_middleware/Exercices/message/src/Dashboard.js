import { useSelector, useDispatch } from 'react-redux';

import {
    useNavigate
  } from 'react-router-dom';

function Dashbord(props) {
    const navigate = useNavigate(); 

    React.useEffect(() => {
        if (shouldRedirect) {
          navigate('/home');
        }
      });

    return (
        <div>
          <p>Welcome</p>
        </div>
    )
}

export default Dashbord;