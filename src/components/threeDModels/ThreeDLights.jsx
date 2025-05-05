const ThreeDLights = () => {
    return (
     <>
      <spotLight position={[4, 5, 4]} intensity={50} color="#97BCFF" penumbra={0.2}/>
      <spotLight position={[-4, -5, 4]}intensity={60} color="#fff"/>
      <spotLight position={[-5,5,5]} intensity={60} color="#B799FF" />
      </>
    );
};

export default ThreeDLights;