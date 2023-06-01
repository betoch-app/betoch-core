FROM python:3

ENV PYTHONBUFFERED=1

WORKDIR /app/backend/

COPY requirements.txt /app/backend/

RUN pip3 install -r requirements.txt

COPY . /app/backend/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

