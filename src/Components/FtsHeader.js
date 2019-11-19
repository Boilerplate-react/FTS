import React from 'react';
import '../Styles/FtsHeader.css'

class FtsHeader extends React.Component {

    render() {

        return (



            <header>
                <div className="Polygon_one" />

                <div className='header1'>

                    <div className="Logo">
                        <img src='..\Assets\Images\LOGOLOGO.png' />
                    </div>
                    <div className="SelectCity">
                        <img src='..\Assets\Icons\Vectorselectcity.png' />
                        <text>Select City</text>
                    </div>
                    <div className="SelectSport">
                        <img src='..\Assets\Icons\iconselectsport.png' />
                        <text>Select Sport</text>
                    </div>

                </div>

                <div className='header2'>
                <div className="header2left">

                    <img className="offer" src='..\Assets\Images\offeroffers.png' />


                    <div className="PatnerWithus">
                        <text>Patner With us</text>
                    </div>

                    <div className="Clubs">
                        <text>CLUBS</text>
                    </div>
                    </div>

                    <div className="header2rigth">

                        <div className="Login">
                            <text>Log In</text>
                        </div>
                        <div className="Signup">
                            <text>Sign Up</text>
                        </div>
                    </div>


                </div>


            </header>
        );
    }
}
export default FtsHeader;



