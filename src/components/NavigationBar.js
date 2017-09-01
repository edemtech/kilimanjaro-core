import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { logout } from '../actions/authActions';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';


class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        // this.props.logout();
    }
    render() {
        // const { isAuthenticated } = this.props.auth;
        // const outputUser = this.props.auth.user;
        // const userLinks = (
        //     <ul className="nav navbar-nav navbar-right">
        //         <li><a>Здравствуй, {outputUser.username} </a></li>
        //         <li><a href="#" onClick={this.logout.bind(this)}>Выйти <span className="glyphicon glyphicon-log-out"></span></a></li>
        //     </ul>
        // );
        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/page00">Page zero</Link></li>
                <li><Link to="/page01">Page one</Link></li>
                <li><Link to="/login">Войти<span className="glyphicon glyphicon-log-in"></span> </Link></li>
            </ul>
        );
        // const modelLinks = (
        //     <ul className="nav navbar-nav navbar-right">
        //         <li><Link to="/workenv"> Моя комната <span className="glyphicon glyphicon-home"></span> </Link> </li>
        //     </ul>
        // );
        // const adminLinks = (
        //     <ul className="nav navbar-nav navbar-right">
        //         <li><Link to="/admin">Админка</Link></li>
        //     </ul>
        // );

        // <Dropdown>
        //     <DropdownTrigger><span>Menu</span></DropdownTrigger>
        //     <DropdownContent>
        //         <ul>
        //             <li><Link to="/page00">Page zero</Link></li>
        //             <li><Link to="/page01">Page one</Link></li>
        //             <li><a href="#">Something else here</a></li>
        //         </ul>
        //     </DropdownContent>
        // </Dropdown>
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">KILIMANJARO</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        {guestLinks}
                        {/*<DropdownMenu triggerType="text" trigger="Settings">
                            <MenuItem text="Home" location="/home" />
                            <MenuItem text="Edit Profile" location="/profile" />
                            <MenuItem text="Change Password" location="/change-password" />
                            <MenuItem text="Privacy Settings" location="/privacy-settings" />
                            <MenuItem text="Delete Account" onClick={this.deleteAccount} />
                            <MenuItem text="Logout" onClick={this.logout} />
                        </DropdownMenu>*/}
                    </div>

                </div>
            </nav>
        );
    }
}

// NavigationBar.propTypes = {
//     auth: React.PropTypes.object.isRequired,
//     logout: React.PropTypes.func.isRequired
// }
// function mapStateToProps(state) {
//     return {
//         auth: state.auth
//     };
// }
// export default connect(mapStateToProps, { logout })(NavigationBar);
export default NavigationBar;
