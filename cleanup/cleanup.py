#!/usr/bin/python

import csv

with open('correctional_population_counts_by_status.csv', 'r') as csvfile:
    csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in csv_reader:
        print(row)

# with open('correctional_population_rates_by_status.csv', 'r') as csvfile:
#     csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
#
#     csvfile1 = open('total_correctional_population.csv', 'w')
#     csvfile2 = open('community_supervision_population.csv', 'w')
#     csvfile3 = open('incarcerated_population.csv', 'w')
#
#     tcp_file = csv.writer(csvfile1)
#     csp_file = csv.writer(csvfile2)
#     ip_file = csv.writer(csvfile3)
#
#     for row in csv_reader:
#         tcp_row = row[0:4]
#         csp_row = [row[0], row[4], row[5], row[6]]
#         ip_row = [row[0], row[7], row[8], row[9]]
#
#         tcp_file.writerow(tcp_row)
#         csp_file.writerow(csp_row)
#         ip_file.writerow(ip_row)
