from flask import Flask

app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'name':"Marka", 
        'logo':"https://petsurfer.com/blog/wp-content/uploads/kedi-sahiplenme.png",
        'brandName' : "Benzerlik"
        }

if __name__ == "__main__":
    app.run(debug=True)