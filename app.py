from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS package
import numpy as np

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

def black_scholes(S, K, r, T, sigma):
    from scipy.stats import norm
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    call_price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    return call_price

@app.route('/api/heatmap-data', methods=['POST'])
def heatmap_data():
    data = request.json
    S = data['S']
    K = data['K']
    r = data['r']
    T_values = data['T_values']
    sigma_values = data['sigma_values']

    heatmap = []
    for T in T_values:
        row = []
        for sigma in sigma_values:
            price = black_scholes(S, K, r, T, sigma)
            row.append(price)
        heatmap.append(row)

    return jsonify({"heatmap": heatmap})

if __name__ == '__main__':
    app.run(debug=True)
