import delay from './delay';

const words = [
    {
        id: 'pl',
        name: "Księgarnia Internetowa",
        nav:{
            nav_home: "Strona Główna",
            nav_manage_elements: "Zarządzaj Elementami",
            nav_config: "Konfiguruj System",
            nav_newest: "Najnowsze",
            nav_recent: "Ostatnio oglądane",
            nav_quest: "Gość",
            nav_user: "Witaj ",
            nav_log_in: "Zaloguj",
            nav_log_out: "Wyloguj"
        },
        login_form:{
            login: "Login",
            password: "Hasło",
            submit: "Zaloguj",
            abort: "Anuluj"
        },
        home_page:{
            header:"Najczęściej kupowane książki",
            homepage_item: {
                title: "Tytuł",
                author: "Autor",
                isbn: "ISBN",
                category: "Kategoria"
            }
        },
        book_details:{
            header: "Szczegóły",
            title: "Tytuł",
            author: "Autor",
            category: "Kategoria",
            cover: "Okładka",
            carrier: "Nośnik",
            price: "Cena",
            isbn: "ISBN",
            close: "Zamknij"
        },
        manage_page:{
            header: "Zarządzaj elementami",
            author: "Autor",
            category: "Kategoria",
            country: "Kraj",
            book: "Książka",
            carrier: "Nośnik",
            cover: "Okładka"
        },
        manage_authors:{
            header: "Autorzy",
            add_new_author_button: "Dodaj nowego autora",
            table_fields:{
                name: "Imie",
                surname: "Nazwisko",
                country: "Kraj"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        manage_categories:{
            header: "Kategorie",
            add_new_category_button: "Dodaj nową kategorie",
            table_fields:{
                name: "Nazwa"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        manage_countries:{
            header: "Kraje",
            table_fields:{
                name: "Nazwa",
                flag: "Flaga"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        manage_books:{
            header: "Książki",
            add_new_book_button: "Dodaj nową książke",
            table_fields:{
                title: "Tytuł",
                author: "Autor",
                isbn: "ISBN",
                category: "Kategoria",
                carrier: "Nośnik",
                cover: "Okładka",
                price: "Cena",
                cover_img: "Url Okładki"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        manage_carriers:{
            header: "Nośniki",
            add_new_carrier_button: "Dodaj nową kategorie",
            table_fields:{
                name: "Nazwa"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        manage_covers:{
            header: "Okładki",
            add_new_cover_button: "Dodaj nową okładkę",
            table_fields:{
                name: "Nazwa"
            },
            table_site_quantity: " z ",
            items_on_table: "Ilość elementów na stronie"
        },
        add_edit_category:{
            header: "Dodaj/Edytuj kategorie",
            name: "Nazwa",
            add_edit_item_button: "Dodaj/Edytuj",
            abort_add_edit_item_button: "Anuluj"
        },
        add_edit_carrier:{
            header: "Dodaj/Edytuj nośnik",
            name: "Nazwa",
            add_edit_item_button: "Dodaj/Edytuj",
            abort_add_edit_item_button: "Anuluj"
        },
        add_edit_cover:{
            header: "Dodaj/Edytuj okładkę",
            name: "Nazwa",
            add_edit_item_button: "Dodaj/Edytuj",
            abort_add_edit_item_button: "Anuluj"
        },
        add_edit_author:{
            header: "Dodaj/Edytuj autora",
            name: "Imie",
            surname: "Nazwisko",
            country: "Kraj",
            add_edit_item_button: "Dodaj/Edytuj",
            abort_add_edit_item_button: "Anuluj"
        },
        add_edit_book:{
            header: "Dodaj/Edytuj książke",
            title: "Tytuł",
            author: "Autor",
            category: "Kategoria",
            cover: "Okładka",
            carrier: "Nośnik",
            price: "Cena",
            isbn: "ISBN",
            add_edit_item_button: "Dodaj/Edytuj",
            abort_add_edit_item_button: "Anuluj"
        },
        confirm_add_edit_item:{
            message: "Czy potwierdzić zmianny?",
            apply: "Zatwierdź",
            canel: "Anuluj"
        },
        confirm_delete_item:{
            message: "Czy chcesz usunąć element?",
            apply: "Zatwierdź",
            canel: "Anuluj"
        }
    },
    {
        id: 'en',
        name: "Online bookshop",
        nav:{
            nav_home: "Home Page",
            nav_manage_elements: "Manage Elements",
            nav_config: "Config System",
            nav_newest: "Newest",
            nav_recent: "Recent watched",
            nav_quest: "Quest",
            nav_user: "Welcome ",
            nav_log_in: "Log in",
            nav_log_out: "Log out"
        },
        login_form:{
            login: "Login",
            password: "Password",
            submit: "Log In",
            abort: "Abort"
        },
        home_page:{
            header:"The most bought books",
            homepage_item: {
                title: "Tytuł",
                author: "Author",
                isbn: "ISBN",
                category: "Category"
            }
        },
        book_details:{
            header: "Details",
            title: "Title",
            author: "Author",
            category: "Category",
            cover: "Cover",
            carrier: "Carrier",
            price: "Price",
            isbn: "ISBN",
            close: "Close"
        },
        manage_page:{
            header: "Manage elements",
            author: "Author",
            category: "Category",
            country: "Country",
            book: "Book",
            carrier: "Carrier",
            cover: "Cover"
        },
        manage_authors:{
            header: "Authors",
            add_new_author_button: "Add new author",
            table_fields:{
                name: "Name",
                surname: "Surname",
                country: "Country"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        manage_categories:{
            header: "Categories",
            add_new_category_button: "Add new category",
            table_fields:{
                name: "Name"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        manage_countries:{
            header: "Countries",
            table_fields:{
                name: "Name",
                flag: "Flag"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        manage_books:{
            header: "Books",
            add_new_book_button: "Add new book",
            table_fields:{
                title: "Title",
                author: "Author",
                isbn: "ISBN",
                category: "Category",
                carrier: "Carrier",
                cover: "Cover",
                price: "Price",
                cover_img: "Cover url"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        manage_carriers:{
            header: "Carriers",
            add_new_carrier_button: "Add new carrier",
            table_fields:{
                name: "Name"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        manage_covers:{
            header: "Covers",
            add_new_cover_button: "Add new cover",
            table_fields:{
                name: "Name"
            },
            table_site_quantity: " of ",
            items_on_table: "Number of items on the page"
        },
        add_edit_category:{
            header: "Add/Edit category",
            name: "Name",
            add_edit_item_button: "Add/Edit",
            abort_add_edit_item_button: "Abort"
        },
        add_edit_carrier:{
            header: "Add/Edit carrier",
            name: "Name",
            add_edit_item_button: "Add/Edit",
            abort_add_edit_item_button: "Abort"
        },
        add_edit_cover:{
            header: "Add/Edit cover",
            name: "Name",
            add_edit_item_button: "Add/Edit",
            abort_add_edit_item_button: "Abort"
        },
        add_edit_author:{
            header: "Add/Edit author",
            name: "Name",
            surname: "Surname",
            country: "Country",
            add_edit_item_button: "Add/Edit",
            abort_add_edit_item_button: "Abort"
        },
        add_edit_book:{
            header: "Add/Edit book",
            title: "Title",
            author: "Author",
            category: "Category",
            cover: "Cover",
            carrier: "Carrier",
            price: "Price",
            isbn: "ISBN",
            add_edit_item_button: "Add/Edit",
            abort_add_edit_item_button: "Abort"
        }
    }
];

class LanguageApi {
    static getPolishWords() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, words[0]));
            }, delay);
        });
    }
    static getEnglishWords() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, words[1]));
            }, delay);
        });
    }
    static getInitialState(){
        return words[0];
    }

}

export default LanguageApi;
