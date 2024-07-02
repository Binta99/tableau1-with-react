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
      this.setState({ error: 'veuillez remplir toutes les chaines.' });
      return;
    }
    const nouveauEtudiant = { nom, prenom, age, note };

    this.setState((prevState) => ({
      tableau: [...prevState.tableau, nouveauEtudiant],
      nom: '',
      prenom: '',
      age: '',
      note: '',
    }));
  }

  render() {
    return (
      <div>
        {/* le formulaire */}
        <div>
          <h1>Ajouter un Etudiant</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="nom ">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={this.state.nom}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="prenom ">Prenom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={this.state.prenom}
                onChange={this.handleChange}
              />{' '}
            </div>
            <div>
              <label htmlFor="age ">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />{' '}
            </div>
            <div>
              <label htmlFor="note ">Note</label>
              <input
                type="number"
                id="note"
                name="note"
                value={this.state.note}
                onChange={this.handleChange}
              />{' '}
            </div>
            {this.state.error && (
              <p style={{ color: 'red' }}>{this.state.error}</p>
            )}
            <div>
              <button type="submit">Ajouter au Tableau</button>
            </div>
          </form>
        </div>
        {/* le tableau */}
        <div>
          <h1>Classement des Etudiant dans le tableau</h1>
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
                {this.state.tableau.map((personne, index) => (
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
      </div>
    );
  }
}

ReactDOM.render(<Etudiant />, document.querySelector('.root'));
