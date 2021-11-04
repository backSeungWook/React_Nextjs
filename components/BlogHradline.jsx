import { Col, Row } from "antd";

export default function BlogHradline(){
  return(
    <Row align='middle'
      style={{height:400,textAlign:'center'}}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize:70,
            fontWeight:'bold'
          }}
        >
          Blog Main
        </h1>
        <p
          style={{fontSize:24}}
        >
          소개글 입니다.~~~~~~~~~~~~~~
        </p>
      </Col>
    </Row>
  )
}