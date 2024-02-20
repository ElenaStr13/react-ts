import {FC, PropsWithChildren} from "react";

import {Header} from "../components";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

MainLayout.propTypes = {

};

export {MainLayout};