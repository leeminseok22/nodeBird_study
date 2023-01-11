import { Avatar, Card, Button } from "antd";
import { useCallback } from "react";
const UserProfile = ({ setIsLogin }) => {
    const onLogout = useCallback(() => {
        setIsLogin(false);
    }, []);
    return (
        <Card
            actions={[
                <div key="bird">
                    bird
                    <br />0
                </div>,
                <div key="follow">
                    follow
                    <br />0
                </div>,
                <div key="follower">
                    follower
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta title="lee" avatar={<Avatar>lee</Avatar>} />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    );
};
export default UserProfile;
