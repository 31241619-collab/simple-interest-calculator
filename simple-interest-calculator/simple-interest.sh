#!/bin/bash

# Simple Interest Calculator

echo "Simple Interest Calculator"

read -p "Enter the Principal Amount: " principal
read -p "Enter the Rate of Interest: " rate
read -p "Enter the Time Period (in years): " time

interest=$((principal * rate * time / 100))

echo "The Simple Interest is: $interest"
