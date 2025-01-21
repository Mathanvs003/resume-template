function NameInput(props) {
  return (  
      <div className="heading">
        <h3>Header Portion</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Maddy" onChange={(e) => props.handleNameChange(e.target.value)}/>

        <label htmlFor="mail">Mail</label>
        <input type="mail" id="mail" placeholder="1234567890" onChange={(e) => props.handleMailChange(e.target.value)}/>


        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="1234567890" onChange={(e) => props.handlePhoneChange(e.target.value)}/>
      
        <label htmlFor="link">Link</label>
        <input type="text" id="link" placeholder="https://github.com/Mathanvs003" onChange={(e) => props.handleLinkChange(e.target.value)}/>

        <label htmlFor="image">Image</label>
        <input type="file" id="image"  onChange={(e) => props.handleImageChange(e.target.value)}/>

      </div>
  );
}

export default NameInput;
