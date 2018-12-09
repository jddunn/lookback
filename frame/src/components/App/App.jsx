/* 
 * 
 */

import React, { Component } from 'react';

// Ant Design
import {
         Row, Col, Layout, Menu, Breadcrumb,
         Icon, Button, Switch, Dropdown, message,
         Tooltip
         } from 'antd';

// Override Antd's lib styles import with local copy
import '../../lib/antd.css';  

// App global comp styles
import './App.scss';

// Menu with sortable tree component
import MainMenu from '../MainMenu/MainMenu';

// HTML Editor / Preview (The Notebook component)
import HTMLEditor from '../HTMLEditor/HTMLEditor';

// Import branding for collapsible footer
import Brand from '../Brand/Brand';

const { Header, Content, Footer, Sider } = Layout;

const editorTypes = Object.freeze(
  {
    INLINE: "inline",
    FULL: "full",
    EQUATION: "equation"
  });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      editorType: editorTypes.INLINE, // Type of editor doc is formatted in;
                                      // defaults to DanteEditor
      fullEditorOn: false
    }

    // const m_this = this;
    this.handleMenuClick = this.handleMenuClick.bind(this);


  }

  // Sider collapse funcs
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // Switch toggle func
  onChange = (checked) => {
    console.log(`switch to ${checked}`);
    this.setState(prevState => ({
      fullEditorOn: {checked}
    }));
  }

  // Antd dropdown funcs for editor switching
  handleButtonClick = (event) => {}

  handleMenuClick = (event) => { 
    this.setState((state, props) => {
      return {editorType: event.key};
    });
  }

  editorSwitchMenu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="inline">
        <Tooltip placement="left"
          overlayStyle={{width: '120px', opacity: '.80'}}
          title={"Streamlined, Medium-style editor"}>
        <Icon type="edit"/>&nbsp;
          {editorTypes.INLINE.charAt(0).toUpperCase() +
          editorTypes.INLINE.slice(1)}
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="full">
        <Tooltip placement="left"
          overlayStyle={{width: '120px', opacity: '.80'}}
          title={"Full HTML editor with word processor capabilities"}>
        <Icon type="form"/>&nbsp;
        {editorTypes.FULL.charAt(0).toUpperCase() +
          editorTypes.FULL.slice(1)}
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="equation">
        <Tooltip placement="left"
          overlayStyle={{width: '120px', opacity: '.80'}}
          title={"Editor with equations and mathematical computations"}>
        <Icon type="calculator"/>&nbsp;
        {editorTypes.EQUATION.charAt(0).toUpperCase() +
          editorTypes.EQUATION.slice(1)}
        </Tooltip>
      </Menu.Item>    
    </Menu>
  );

  render() {

    const typeOfEditor = "basic"; // By default render basic editor
    console.log(this.state.editorType);
    
    return (
      <div style={{ display: 'flex', flex: '0 0 auto', flexDirection: 'column', height: '100%', width: '100%', margin: 0 }}>
              <Layout >
                <Sider
                  width={350}
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                <div
                      className="brandWrapper"
                      style={{ top: '0', 
                      left: '0',
                      zIndex: '100',
                      opacity: '1',
                      }}
                      onClick={this.toggleCollapsed}>
                      <Brand/>
                </div>
                  <MainMenu />
                </Sider>
                <Layout>
                  {/* <Header style={{padding: 0 }}>Frame</Header> */}
                  <Content>
                    <div className="center notepadContainer">
                        <br></br>
                        <div className="titleWrapper">
                          <h4 className="sectionTitleText">Notebook</h4>
                            <div className="notebookSwitch">
                            <Tooltip placement="left"
                              overlayStyle={{width: '180px', opacity: '.95'}}
                              title={"Switch editor mode (this changes the document format)"}>
                              <Dropdown.Button
                                className="dropdownCustom"
                                style={{borderRadius: '15px'}}
                                dropdownMatchSelectWidth={true}
                                onClick={this.handleButtonClick}
                                overlay={this.editorSwitchMenu}
                                >
                                <div className="innerButtonLabel">
                                  <p>
                                    {this.state.editorType.charAt(0).toUpperCase() +
                                    this.state.editorType.slice(1)}
                                  </p>
                                </div>
                              </Dropdown.Button>
                            </Tooltip>
                            </div>
                        </div>
                        <div className="htmlEditorWrapper">
                          <HTMLEditor fullEditorOn={this.state.fullEditorOn}/>
                        </div>
                    </div>
                  </Content>
              </Layout>
          </Layout>
        </div>
    );
  }
}

export default App;