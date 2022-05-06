import requests

url = "https://xkubist-random-word-v1.p.rapidapi.com/run.cgi"

headers = {
	"Authorization": "undefined",
	"language_selection": "<REQUIRED>",
	"word_selection": "<REQUIRED>",
	"length_selection": "<REQUIRED>",
	"probability_selection": "<REQUIRED>",
	"X-RapidAPI-Host": "xkubist-random-word-v1.p.rapidapi.com",
	"X-RapidAPI-Key": "SIGN-UP-FOR-KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)