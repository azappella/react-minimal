import React from 'react';
import {styled} from '@stitches/react';

const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    fontFamily: 'Open Sans, sans-serif',
});

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '500px',
    height: '40%',
});

const Title = styled('h1', {
    color: 'black',
    fontSize: '2.5rem',
    fontWeight: '700',
});

const Paragraph = styled('p', {
    color: 'black',
    fontSize: '1rem',
});

function App() {
    return (
        <Container>
            <Wrapper>
                <Title>
                    React Minimal
                </Title>
                <Paragraph>A simple and (relatively) minimal starter template for react.</Paragraph>
            </Wrapper>
        </Container>
    );
}

export default App;
