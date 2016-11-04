var NewItem= React.createClass({ 
	handleClick() { 
		var name = this.refs.email.value; 
		$.ajax({ 
			url: '/api/v1/users', 
			type: 'POST', 
			data: { user: { email: email } }, 
			success: (response) => { 
				console.log('it worked!', response);
				 } 
			}); 
        }, 
        render() { 
        	return ( 
        		<div> 
        		    <input ref='email' placeholder='Enter the email' /> 
        		    <button onClick={this.handleClick}>Submit</button> </div> 
        		    ) 
        } 
    });
