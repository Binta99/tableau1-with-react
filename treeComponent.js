class FormEtudiant extends React.Component {
  render() {
    return (
      <div>
        <h1>Ajouter un Etudiant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={this.props.nom}
              onChange={this.props.onChange}
            />
          </div>
          <div>
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={this.props.prenom}
              onChange={this.props.onChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={this.props.age}
              onChange={this.props.onChange}
            />
          </div>
          <div>
            <label htmlFor="note">Note</label>
            <input
              type="number"
              id="note"
              name="note"
              value={this.props.note}
              onChange={this.props.onChange}
            />
          </div>
          {this.props.error && (
            <p style={{ color: 'red' }}>{this.props.error}</p>
          )}
          <div>
            <button type="submit">Ajouter au Tableau</button>
          </div>
        </form>
      </div>
    );
  }
}
class TableauEtudiants extends React.Component {
  render() {
    return (
      <div>
        <h1>Classement des Etudiants dans le tableau</h1>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Age</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tableau.map((personne, index) => (
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
      </div>
    );
  }
}
// Composant principal
class Etudiant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      age: '',
      note: '',
      tableau: [],
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nom, prenom, age, note } = this.state;

    if (!prenom || !nom || !age || !note) {
      this.setState({ error: 'Veuillez remplir toutes les champs.' });
      return;
    }
    const nouveauEtudiant = { nom, prenom, age, note };

    this.setState((prevState) => ({
      tableau: [...prevState.tableau, nouveauEtudiant],
      nom: '',
      prenom: '',
      age: '',
      note: '',
      error: '',
    }));
  }

  render() {
    return (
      <div>
        <FormEtudiant
          nom={this.state.nom}
          prenom={this.state.prenom}
          age={this.state.age}
          note={this.state.note}
          error={this.state.error}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <TableauEtudiants tableau={this.state.tableau} />
      </div>
    );
  }
}

ReactDOM.render(<Etudiant />, document.querySelector('.root'));
