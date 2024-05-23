import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import {
  Button,
  Container,
  Row,
  Table,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { IoMdAdd } from "react-icons/io";
import BaseForm from "./BaseForm";
function Vote() {

  //**** Axios Start ****// 

  const BaseURL = "https://localhost:7204";
  axios.defaults.baseURL = config.API_URL;
  // content type
  axios.defaults.headers.post["Content-Type"] = "application/json";
  //  axios.defaults.headers.post["Authorization"] = "bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJzdHJpbmciLCJyb2xlIjoiU3VwZXJBZG1pbiIsIm5iZiI6MTcxNDEwODg4MiwiZXhwIjoxNzE0MTk1MjgyLCJpYXQiOjE3MTQxMDg4ODJ9.1AkdSkvEKbjYrM7Jb5m4RIDim6cveFXP51wKGN2SaBmAyAenaaC2T335uoUibQ3nO8HfR681aoKsinjWmu0rZg";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  //**** Axios End ****// 
 
  const [modal, setModal] = useState(false);
  const [candidaetList,setCandidaetList] = useState([]);
  const [voterList,setVoterList] = useState([]);
  const [modalCandidate, setmodalCandidate] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle1 = () => setmodalCandidate(!modalCandidate);

  const GetCandidates = async ()=>{
    let res = await axios.get("/candidate")
    setVoterList(res.data.data)
  }

  const GetVoters = async ()=>{
    let res = await axios.get("/voter")
    setCandidaetList(res.data.data)
  }

  useEffect(()=>{
    GetCandidates()
    GetVoters()
  },[])

  return (
    <section>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Label for="exampleEmail">Name</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter Voter Name"
            type="email"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalCandidate} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Modal title</ModalHeader>
        <ModalBody>
          <Label for="exampleEmail">Name</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter Candidate Name"
            type="email"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle1}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Container className="mt-4">
        <Row>
          <Col className="bg-light border" md="6">
            <Table bordered>
              <thead>
                <tr>
                  <th colSpan={2}>
                    Voters <IoMdAdd onClick={toggle} />
                  </th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>Has Voted</th>
                </tr>
              </thead>
              <tbody>
                {candidaetList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col className="bg-light border" md="6">
            <Table bordered>
              <thead>
                <tr>
                  <th colSpan={2}>
                    Candidates{" "}
                    <IoMdAdd
                     onClick={toggle1}
                    />  
                  </th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                {voterList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        
            <BaseForm></BaseForm>
      </Container>
    </section>
  );
}

export default Vote;
