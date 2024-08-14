<?php 
// Database Connection
$host = 'localhost';
$user = 'root';
$pass = 'root';
$dbname = 'contacts';

// Create Connection
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Function to create a new contact
function createContact($conn, $name, $email, $phone) {
    $sql = "INSERT INTO contacts (name, email, phone) VALUES ('$name', '$email', '$phone')";
    mysqli_query($conn, $sql);
}

// Function to retrieve all contacts
function getContacts($conn) {
    $sql = 'SELECT * FROM contacts';
    $result = mysqli_query($conn, $sql);
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

// Function to update a specific contact
function updateContact($conn, $id, $name, $email, $phone) {
    $sql = "UPDATE contacts SET name='$name', email='$email', phone='$phone' WHERE id=$id";
    mysqli_query($conn, $sql); 
}

// Function to delete a contact
function deleteContact($conn, $id) {
    $sql = "DELETE FROM contacts WHERE id=$id";
    mysqli_query($conn, $sql);
}

// Handling POST request for updating contact information
if (isset($_POST['update'])) {
    updateContact($conn, $_POST['id'], $_POST['name'], $_POST['email'], $_POST['phone']);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Handling GET request for deleting contact information
if (isset($_GET['delete'])) {
    deleteContact($conn, $_GET['delete']);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Handling POST requests for creating a new contact
if (isset($_POST['create'])) {
    createContact($conn, $_POST['new_name'], $_POST['new_email'], $_POST['new_phone']);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Retrieve contacts for display
$contacts = getContacts($conn);

// HTML to add a new contact
echo "<h2>Add New Contact</h2>";
echo "<form method='POST' action=''>";
echo "<input type='text' name='new_name' placeholder='Enter name' required>";
echo "<input type='email' name='new_email' placeholder='Enter email' required>";
echo "<input type='text' name='new_phone' placeholder='Enter phone' required>";
echo "<input type='submit' name='create' value='Add Contact'>";
echo "</form>";

// HTML to display contacts
echo "<h2>Contacts List</h2>";
echo "<table>";
foreach ($contacts as $contact) {
    echo "<tr>";
    echo "<td>{$contact['name']}</td>";
    echo "<td>{$contact['email']}</td>";
    echo "<td>{$contact['phone']}</td>";

    // Edit and Delete links/form
    if (isset($_GET['edit']) && $_GET['edit'] == $contact['id']) {
        // Edit form if the edit link was clicked
        echo "<td>";
        echo "<form method='POST' action=''>";
        echo "<input type='hidden' name='id' value='{$contact['id']}'>";
        echo "<input type='text' name='name' value='{$contact['name']}'>";
        echo "<input type='text' name='email' value='{$contact['email']}'>";
        echo "<input type='text' name='phone' value='{$contact['phone']}'>";
        echo "<input type='submit' name='update' value='Save Changes'>";
        echo "</form>";
        echo "</td>";
    } else {
        // Display edit link
        echo "<td><a href='?edit={$contact['id']}'>Edit</a></td>";
    
        // Display delete link
        echo "<td><a href='?delete={$contact['id']}'>Delete</a></td>";
    }
    echo "</tr>"; // This should be outside the if-else block to close each row properly
}
echo "</table>";

// Close the connection
mysqli_close($conn);
?>
