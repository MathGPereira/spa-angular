from API import app

if __name__ == "__main__":
    app.run(debug=True, port=4200, host="127.0.0.1", threaded=True)
