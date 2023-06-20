import json
import requests
import environ
env = environ.Env()
environ.Env.read_env()

SMS_URL = env('SMS_API')
ORGANIZATION = env('SMS_ORGANIZATiON_ID')
SMS_API_KEY = env('SMS_APIKEY')
headers = {
    'Accept': 'application/json',
    'Authorization': f'ApiKey {SMS_API_KEY}'
}


def send_confirmation_code(receiver_phone):

    body = {
        'organization': ORGANIZATION,
        'receiver_phone': receiver_phone
    }
    response = requests.post(
        f'{SMS_URL}SendOTPCode', json=body, headers=headers, auth=None)
    return json.loads(response.text)


def confirm_otp_code(receiver_phone, code):
    body = {
        'receiver_phone': receiver_phone,
        'code': code
    }

    response = requests.post(
        f'{SMS_URL}OTPConfirmation', json=body, headers=headers, auth=None)
    return json.loads(response.text)
