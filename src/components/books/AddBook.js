const AddBook = () => (
  <>
    <h3>Add New Book</h3>
    <form>
      <input
        type="text"
        placeholder="Book title"
        required
      />
      <input
        type="text"
        placeholder="Author"
        required
      />
      <button type="button">Add Book</button>
    </form>
  </>
);

export default AddBook;
