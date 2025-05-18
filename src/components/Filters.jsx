import { useGlobalContext } from "../context/GlobalContext";

const Filters = () => {

  const { title, type_id, order, handleOrderChange, handleSearchChange, handleTypeChange, resetFilter } = useGlobalContext();

  return (
    <>
      <input
        type="text"
        className="form-control"
        style={{ maxWidth: "300px" }}
        placeholder="Cerca per titolo..."
        value={title}
        onChange={handleSearchChange}
      />

      <select
        className="form-select"
        style={{ maxWidth: "300px" }}
        value={type_id}
        onChange={handleTypeChange}
      >
        <option value="">Seleziona il genere</option>
        <option value="1">Kodomo - Per bambini (6-12 anni)</option>
        <option value="2">Shōnen - Per ragazzi (12-18 anni)</option>
        <option value="3">Shōjo - Per ragazze (12-18 anni)</option>
        <option value="4">Seinen - Per giovani adulti uomini (18+ anni)</option>
        <option value="5">Josei - Per giovani adulte donne (18+ anni)</option>
        <option value="6">Gekiga - Manga realistici e drammatici (per adulti)</option>
      </select>

      <select
        className="form-select"
        style={{ maxWidth: "300px" }}
        value={order}
        onChange={handleOrderChange}
      >
        <option value="1">Ordine: Alfabetico</option>
        <option value="2">Ordine: Più recente</option>
        <option value="3">Ordine: Più datato</option>
        <option value="4">Ordine: Ultime aggiunte</option>
      </select>

      <div className="reset btn btn-outline-danger" onClick={resetFilter}>
        Pulisci
      </div>
    </>
  )
}

export default Filters