import { Navigate } from "react-router-dom";
import { Component } from "react";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import Todoctx from "../contexts/TodoContext";
import withNavigate from "../HOC/withNavigate";

class Header extends Component {
    render() {
        const items = [
            {
                label: "Имейл",
                key: "mail",
                icon: <MailOutlined />,
            },
            {
                label: "Меню",
                key: "app",
                icon: <AppstoreOutlined />,
                disabled: true,
            },
            {
                label: "Настройки",
                key: "SubMenu",
                icon: <SettingOutlined />,
            },
            {
                label: (
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Navigation Four - Link
                    </a>
                ),
                key: "alipay",
            },
        ];
        //  this.props.navigate("/404"); работи,но не е за хедър,а за друга страница, тук има безкр. цикъл
        return (
            // с Consumer се подава контекста при клас-компонентите
            <>
                <Menu mode="horizontal" items={items} />
                <Todoctx.Consumer>
                    {({ name }) => {
                        <h1>{name}</h1>;
                    }}
                </Todoctx.Consumer>
            </>
        );
    }
}
export default withNavigate(Header);
