import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
const { Header, Footer, Content, Sider } = Layout;

const MainLayout = (props: any) => {
	return (
		<Layout className={styles.LayoutContainer}>
			<Header className={styles.HeaderContainer}>
				<h2>Header</h2>
			</Header>
			<Content>
				{
					props.children
				}
			</Content>
			<Footer>
				<h2>Footer</h2>
			</Footer>

		</Layout>
	);
};

export default MainLayout;