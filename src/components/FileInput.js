import React from 'react';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {base64image: ''};
    }

    handleSubmit = event => {
        event.preventDefault();
        const file = this.fileInput.current.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log('RESULT', reader.result);
            const base64image = reader.result;
            console.log(typeof  base64image)
            this.setState({base64image});
        }
        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload file:
                        <input type="file" ref={this.fileInput}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <img src={this.state.base64image}/>
            </div>
        );
    }
}

export default FileInput;