var AllUsers = React.createClass({ 
	
	 getInitialState() {
	  return { users: [] } 
	  },
	   
	   componentDidMount() {
	    $.getJSON('/api/v1/users.json', (response) => { this.setState({ users: response }) }); },
	 
	 render() { 
	 	var users= this.state.users.map((user) => { 
	 		return ( 
	 			<div key={user.id}> 
		 			<h3>{user.email}</h3> 
		 			<p>{user.token}</p> 
	 			</div> 
	 			) 
	 	}); 

	 	return( 
	 		<div> 
	 		  {users} 
	 		</div> 
	 		) 
	 }
