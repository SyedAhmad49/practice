const Loader = (props)=>
{
    console.log('Into Loader',props.isShow)
    return (
      <>
        {props.isShow&&<p>Loading</p>}
      </>
    );
}
export default Loader;