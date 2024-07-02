class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      age: '',
      note: '',
      personnes: [],
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { nom, prenom, age, note } = this.state;

    // Vérifions que tous les champs sont remplis
    if (!nom || !prenom || !age || !note) {
      this.setState({ error: 'Tous les champs doivent être remplis.' });
      return;
    }

    const nouvellePersonne = { nom, prenom, age, note };

    this.setState((prevState) => ({
      personnes: [...prevState.personnes, nouvellePersonne],
      nom: '',
      prenom: '',
      age: '',
      note: '',
    }));
  }

  render() {
    return (
      <div>
        <h1>Ajouter une personne</h1>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nom: </label>
            <input
              type="text"
              name="nom"
              value={this.state.nom}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Prénom: </label>
            <input
              type="text"
              name="prenom"
              value={this.state.prenom}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Âge: </label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Note: </label>
            <input
              type="text"
              name="note"
              value={this.state.note}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>

        <h2>Liste des personnes</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Âge</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {this.state.personnes.map((personne, index) => (
              <tr key={index}>
                <td>{personne.nom}</td>
                <td>{personne.prenom}</td>
                <td>{personne.age}</td>
                <td>{personne.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
