import React from 'react';
import {Card,Grid,Container}from 'semantic-ui-react';
const src = '/images/wireframe/white-image.png'
 const GridExampleColumnCount = () => ( 
     <div className="">
     <Container>
<Grid.Row columns={4}>
<Card.Group itemsPerRow={4}>
    <Card color='red' image={src} />
    <Card color='orange' image={src} />
    <Card color='yellow' image={src} />
    <Card color='olive' image={src} />
    <Card color='green' image={src} />
    <Card color='teal' image={src} />
    <Card color='blue' image={src} />
    <Card color='violet' image={src} />
    <Card color='purple' image={src} />
    <Card color='pink' image={src} />
    <Card color='brown' image={src} />
    <Card color='grey' image={src} />

    </Card.Group>
</Grid.Row>
</Container>
</div>
);
export default GridExampleColumnCount;
