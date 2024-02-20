import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IUser} from "../interfaces";
import {useLocation, useParams} from "react-router-dom";
import {useAppLocation} from "../hooks";
import {userService} from "../services";
import {UserDetails} from "../components";

interface IProps extends PropsWithChildren {

}

const UserDetailsPage: FC<IProps> = () => {
   const {state} = useAppLocation<{ user: IUser }>();
   const [userDetails, setUserDetails] = useState<IUser>(null);
   const {id} = useParams();

    useEffect(() => {
        if(state?.user) {
            setUserDetails(state.user)
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
        }
    }, [id]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UserDetailsPage};
