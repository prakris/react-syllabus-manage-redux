import React,{ Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import '../App.css';
import { data } from '../Data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { ModalC }  from '../Components/ModalC';
import { ModalT } from '../Components/ModalT';
import { Tables } from '../Components/Table';
import { USE } from '../Store/Action'; 
import { connect } from 'react-redux';
import swal from 'sweetalert';


class App extends Component {

 constructor(props)
 {
   super(props);
   this.state={
                sub:'',
                chapModalSelect: false,
                topModalSelect:false,
                chapValue:'',
                topValue:'',
                mindex:'',
                editChap:'',
                chapindex:'',
                topindex:'',
                tcindex:''
               }
 }

 handleStd = (event) =>
 {
//  this.setState({std : event.target.value})
this.props.onIn(event.target.value)
 }

 handleSub = (event) =>
 {
   this.setState({sub : event.target.value})
 }

 handleChapter = () =>
 {
   this.setState({chapModalSelect:true})
 }

 handleTopic = (index) =>
 {
   this.setState({topModalSelect:true, mindex:index}) 
 }
 
 handleHide = () =>
 {
   this.setState({chapModalSelect:false, topModalSelect:false})
 }

 handleChapValue = (event) =>
 {
   this.setState({chapValue:event.target.value})
 }

 handleTopValue = (event) =>
 {
   this.setState({ topValue:event.target.value})
 }

 handleChapSubmit = () =>
 {    
    const { chapValue, chapindex, editChap } = this.state;
    if(editChap)
    {
      this.props.onChapEdit(chapindex,chapValue)
      this.setState({editChap:false, chapModalSelect:false, chapValue:''})
    }
    else
    {
    // this.props.mData.chapter.push({id:Math.random()*10, chapterName:chapValue, topic:[]});
    this.props.onChapAdd({id:Math.random()*10, chapterName:chapValue, topic:[]})
    this.setState({chapModalSelect:false, chapValue:''});
    }
 }

 handleTopSubmit = () =>
 {
   const { topValue, editTop, topindex, tcindex} =this.state;
   if(editTop)
   {
    this.props.onTopEdit(tcindex,topindex,topValue)
    this.setState({topModalSelect:false, editTop:false, topValue:''})
   }
   else
   {
    this.props.onTopAdd(this.state.mindex,this.state.topValue)
    this.setState({topModalSelect:false, topValue:''})
   }
 }

 handleChapDelete = (index) =>
 {
  this.props.onChapDel(index)
  this.setState({chapValue:''})
 }

 handleTopDelete = (tindex, index) =>
 {
  this.props.onTopDel(tindex,index)
  this.setState({topValue:''})
 }

 handleChapEdit = (index) =>
 {
   let check=this.props.mData.chapter[index].chapterName;
   this.setState({chapModalSelect:true, chapValue:check,
                  editChap:true, chapindex:index})
 }

handleTopEdit = (tindex, index) =>
 {
  
   let share=this.props.mData.chapter[index].topic[tindex]
   this.setState({topModalSelect:true, topValue:share, editTop:true, topindex:tindex, tcindex:index})
 }

 handleClick = () =>
 { 
   const {sub} =this.state;
   this.props.onSubmit(sub)
   this.setState({std:'',sub:''})
 }

  render()
  { console.log("mdata",this.props.mData)
    console.log("props",this.props)
    const getstd=data.find(match => match.standard == this.props.mstd) 
    console.log('getstd=',getstd)
   return( 
      <div>
        <h1 align="center"><b>Syllabus Management</b></h1> 
        <Form>
              <Form.Row>
                <Col sm={5}>
                  <Form.Label style={{float:"right"}} ><b>Standard</b></Form.Label>
                  <Form.Control as="select" value={this.props.mstd} onChange={this.handleStd}>
                    <option hidden>Select Your Standard</option>
                    <option >11</option>
                    <option >12</option>
                  </Form.Control>
                </Col>
                <Col sm={5}>
                  <Form.Label style={{float:"right"}} ><b>Subject</b></Form.Label>
                    <Form.Control as="select" value={this.state.sub} onChange={this.handleSub} >
                      <option hidden>Select Your Subject</option>
                      { getstd ?
                        getstd.content.map((value,index)=> 
                        <option key={index} >{value.subject}</option>
                         ):''
                      }
            
                    </Form.Control>
                </Col>
                <Col sm={2}  style={{alignSelf: "flex-end"}}>
                  <Button className="btn btn-primary" onClick={this.handleClick}
                      disabled={this.state.std === '' && this.state.sub === ''}>
                      {<FontAwesomeIcon icon={faCheckCircle} />}
                  </Button>
                </Col>
          </Form.Row> 
        </Form>    
        <div>
          <Tables tValue={this.props.mData}
                  handleChapter={this.handleChapter}
                  handleChapDelete={this.handleChapDelete}
                  handleChapEdit={this.handleChapEdit}
                  handleTopic={this.handleTopic}
                  handleTopEdit={this.handleTopEdit}
                  handleTopDelete={this.handleTopDelete}
           />
        </div>
        <div>
          <ModalC show={this.state.chapModalSelect}
                  value={this.state.chapValue}
                  handleHide={this.handleHide}
                  handleChapValue={this.handleChapValue}
                  handleChapSubmit={this.handleChapSubmit}
                  />
  
          <ModalT  show={this.state.topModalSelect}
                   handleHide={this.handleHide}
                   value={this.state.topValue}
                   handleTopValue={this.handleTopValue}
                   handleTopSubmit={this.handleTopSubmit} 
                   />
       </div>              
      </div>
    );
  }
}


const mapStateToProps = state =>
{ console.log("reducer state", state)
  return {
    mData : state.subjectData,
    mstd : state.std
  };
}

const mapDispatchToProps = dispatch =>
{
  return {
    onSubmit : (sub) => dispatch({type: USE.SUBMIT, sub: sub}),
    onChapAdd: (data) => dispatch({type: USE.CHAPADD, data: data}),
    onTopAdd: (mindex,topValue) => dispatch({type: USE.TOPADD ,index: mindex, value: topValue}),
    onChapDel: (index) => dispatch({type: USE.CHAPDELETE, index: index}),
    onTopDel: (tindex,index) => dispatch({type: USE.TOPDELETE, tindex: tindex, index: index }),
    onChapEdit: (chapindex,chapValue) => dispatch({type: USE.CHAPEDIT, index: chapindex, value: chapValue}),
    onTopEdit: (tcindex,topindex,topValue) => dispatch({type: USE.TOPEDIT , tcindex: tcindex, topindex: topindex,
                                                         topValue: topValue}),
    onIn: (event) => dispatch({type: USE.IN , event: event})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
