#!/usr/bin/python

import csv

with open('correctional_population_counts_by_status.csv', 'r') as csvfile:
    csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in csv_reader:
        print(row)
